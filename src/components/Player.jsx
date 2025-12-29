import { useState, useEffect, useCallback, useMemo } from 'react';
import { frameworks } from '../data/frameworks';
import './Player.css';

// Get the earliest and latest dates from all frameworks' timelines
const getDateRange = () => {
  let minDate = new Date();
  let maxDate = new Date(2014, 0, 1); // Start from YDB inception

  frameworks.forEach(f => {
    if (f.timeline && f.timeline.length > 0) {
      f.timeline.forEach(event => {
        const date = new Date(event.date);
        if (date < minDate) minDate = date;
        if (date > maxDate) maxDate = date;
      });
    }
  });

  // Set to first of month
  minDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  maxDate = new Date(); // Current date
  
  return { minDate, maxDate };
};

// Convert date to "YYYY.MM" format
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}.${month}`;
};

// Get total months between two dates
const getMonthsDiff = (startDate, endDate) => {
  return (endDate.getFullYear() - startDate.getFullYear()) * 12 
    + (endDate.getMonth() - startDate.getMonth());
};

// Add months to date
const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

function Player({ 
  currentDate, 
  setCurrentDate, 
  isEnabled, 
  isPlaying: isPlayingProp, 
  setIsPlaying: setIsPlayingProp,
  speed: speedProp,
  setSpeed: setSpeedProp,
  loop: loopProp,
  setLoop: setLoopProp
}) {
  // Use local state only if props are not provided
  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const [localSpeed, setLocalSpeed] = useState(1);
  const [localLoop, setLocalLoop] = useState(true);
  
  // Use props if provided, otherwise use local state
  const isPlaying = isPlayingProp !== undefined ? isPlayingProp : localIsPlaying;
  const setIsPlaying = setIsPlayingProp !== undefined ? setIsPlayingProp : setLocalIsPlaying;
  const speed = speedProp !== undefined ? speedProp : localSpeed;
  const setSpeed = setSpeedProp !== undefined ? setSpeedProp : setLocalSpeed;
  const loop = loopProp !== undefined ? loopProp : localLoop;
  const setLoop = setLoopProp !== undefined ? setLoopProp : setLocalLoop;
  
  const { minDate, maxDate } = useMemo(() => getDateRange(), []);
  const totalMonths = useMemo(() => getMonthsDiff(minDate, maxDate), [minDate, maxDate]);
  
  const currentMonths = useMemo(() => 
    getMonthsDiff(minDate, currentDate), 
    [minDate, currentDate]
  );
  
  const progress = totalMonths > 0 ? (currentMonths / totalMonths) * 100 : 0;

  // Playback effect
  useEffect(() => {
    if (!isPlaying || !isEnabled) return;

    const interval = setInterval(() => {
      setCurrentDate(prevDate => {
        const newDate = addMonths(prevDate, 1);
        if (newDate >= maxDate) {
          if (loop) {
            // Loop back to the beginning
            return minDate;
          } else {
            // Stop at the end
            setIsPlaying(false);
            return maxDate;
          }
        }
        return newDate;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, maxDate, minDate, loop, setCurrentDate, isEnabled, setIsPlaying]);

  const handlePlayPause = useCallback(() => {
    if (currentDate >= maxDate) {
      // Reset to beginning if at end
      setCurrentDate(minDate);
    }
    setIsPlaying(!isPlaying);
  }, [currentDate, maxDate, minDate, setCurrentDate, isPlaying, setIsPlaying]);

  const handleSpeedDecrease = useCallback(() => {
    setSpeed(Math.max(0.25, speed / 2));
  }, [speed, setSpeed]);

  const handleSpeedIncrease = useCallback(() => {
    setSpeed(Math.min(16, speed * 2));
  }, [speed, setSpeed]);

  const handleSliderChange = useCallback((e) => {
    const months = parseInt(e.target.value, 10);
    setCurrentDate(addMonths(minDate, months));
    setIsPlaying(false);
  }, [minDate, setCurrentDate, setIsPlaying]);

  const handleReset = useCallback(() => {
    setCurrentDate(minDate);
    setIsPlaying(false);
  }, [minDate, setCurrentDate, setIsPlaying]);

  const handleGoToEnd = useCallback(() => {
    setCurrentDate(maxDate);
    setIsPlaying(false);
  }, [maxDate, setCurrentDate, setIsPlaying]);

  const handleToggleLoop = useCallback(() => {
    setLoop(!loop);
  }, [loop, setLoop]);

  if (!isEnabled) return null;

  return (
    <div className="player-container">
      <div className="player-controls">
        <button 
          className="player-btn player-btn-reset" 
          onClick={handleReset}
          title="В начало"
        >
          ⏮
        </button>
        <button 
          className="player-btn player-btn-speed" 
          onClick={handleSpeedDecrease}
          title="Замедлить (×0.5)"
        >
          ⏪
        </button>
        <button 
          className="player-btn player-btn-play" 
          onClick={handlePlayPause}
          title={isPlaying ? "Пауза" : "Воспроизвести"}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button 
          className="player-btn player-btn-speed" 
          onClick={handleSpeedIncrease}
          title="Ускорить (×2)"
        >
          ⏩
        </button>
        <button 
          className="player-btn player-btn-end" 
          onClick={handleGoToEnd}
          title="В конец"
        >
          ⏭
        </button>
        <div className="player-date">
          {formatDate(currentDate)}
        </div>
        <div className="player-speed">
          ×{speed}
        </div>
        <button 
          className={`player-btn player-btn-loop ${loop ? 'active' : ''}`}
          onClick={handleToggleLoop}
          title={loop ? "Зациклить (включено)" : "Проиграть однократно"}
          aria-label={loop ? "Зациклить (включено)" : "Проиграть однократно"}
        />
      </div>
      <div className="player-timeline">
        <input
          type="range"
          min={0}
          max={totalMonths}
          value={currentMonths}
          onChange={handleSliderChange}
          className="player-slider"
          style={{
            '--progress': `${progress}%`
          }}
        />
      </div>
    </div>
  );
}

// Helper function to get frameworks visible at a specific date
export const getFrameworksAtDate = (date, allFrameworks) => {
  return allFrameworks.filter(f => {
    if (!f.timeline || f.timeline.length === 0) {
      // Frameworks without timeline are always visible
      return true;
    }
    
    // Check if any timeline event is before or on the current date
    const firstEventDate = new Date(f.timeline[0].date);
    return firstEventDate <= date;
  });
};

// Helper to get framework state at a specific date
export const getFrameworkStateAtDate = (framework, date) => {
  if (!framework.timeline || framework.timeline.length === 0) {
    return {
      quality: framework.quality,
      attention: framework.attention,
      status: framework["Статус"],
      isNew: false
    };
  }

  // Find the most recent timeline event before or on the current date
  let currentState = null;
  let previousState = null;
  
  for (const event of framework.timeline) {
    const eventDate = new Date(event.date);
    if (eventDate <= date) {
      previousState = currentState;
      currentState = event;
    } else {
      break;
    }
  }

  if (!currentState) {
    return null; // Framework doesn't exist yet at this date
  }

  // Check if this framework just appeared (within last month)
  const eventDate = new Date(currentState.date);
  const monthAgo = new Date(date);
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  const isNew = eventDate > monthAgo && !previousState;

  return {
    quality: currentState.quality ?? framework.quality,
    attention: currentState.attention ?? framework.attention,
    status: currentState.status ? [currentState.status] : framework["Статус"],
    description: currentState.description,
    isNew
  };
};

export default Player;

