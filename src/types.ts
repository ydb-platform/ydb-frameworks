export interface Framework {
    id: string;
    name: string;
    releaseDate: Date;
    description: string;
    dependencies: string[];
    category: 'driver' | 'orm' | 'admin' | 'etl' | 'analytics';
    url: string;
}
