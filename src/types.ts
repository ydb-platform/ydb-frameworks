export interface Framework {
    id: string;
    name: string;
    releaseDate: Date;
    frameworkReleaseDate: Date;
    description: string;
    dependencies: string[];
    category: 'driver' | 'orm' | 'admin' | 'etl' | 'analytics';
    language: string; // Добавляем поле языка программирования
    url: string;
}
