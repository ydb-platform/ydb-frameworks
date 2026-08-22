import { getMaturityFromLegacyStatus } from '../data/frameworks';

export const getFrameworksAtDate = (date, allFrameworks) => {
  return allFrameworks.filter(framework => {
    if (!framework.timeline || framework.timeline.length === 0) return true;
    return new Date(framework.timeline[0].date) <= date;
  });
};

export const getFrameworkStateAtDate = (framework, date) => {
  if (!framework.timeline || framework.timeline.length === 0) {
    return {
      quality: framework.quality,
      attention: framework.attention,
      status: framework["Статус"],
      maturity: framework.maturity || getMaturityFromLegacyStatus(framework["Статус"]),
      isNew: false,
    };
  }

  let currentState = null;
  let previousState = null;

  for (const event of framework.timeline) {
    if (new Date(event.date) <= date) {
      previousState = currentState;
      currentState = event;
    } else {
      break;
    }
  }

  if (!currentState) return null;

  const eventDate = new Date(currentState.date);
  const monthAgo = new Date(date);
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  const reviewedAt = framework.evidenceReviewedAt
    ? new Date(`${framework.evidenceReviewedAt}T00:00:00`)
    : null;
  const maturity = reviewedAt && reviewedAt <= date
    ? framework.maturity
    : currentState.maturity || getMaturityFromLegacyStatus(currentState.status || framework["Статус"]);

  return {
    quality: currentState.quality ?? framework.quality,
    attention: currentState.attention ?? framework.attention,
    status: currentState.status ? [currentState.status] : framework["Статус"],
    maturity,
    description: currentState.description,
    isNew: eventDate > monthAgo && !previousState,
  };
};
