export type Team = {
    id?: string, name: string, is_active: boolean, country: string
}

export type Driver = {
    id? : string,
    first_name: string,
    last_name: string,
    birthdate: string,
    nationality: string,
    current_team_id: string
}

export type Circuit = {
    id? : string,
    name: string,
    city: string,
    state: string
    country: string
}

export type Race = {
    id?: string,
    year?: any,
    seasonYear?: number,
    round: number,
    circuit?: any,
    circuitId?: string,
    name: string,
    laps: number,
    date: string,
    time: string,
    quali_date: string,
    quali_time: string,
    sprint_date: string,
    sprint_time: string
}

export type Qualyfying = {
    id?: string,
    race?: any,
    raceId?: string,
    driver?: any,
    driverId?: string,
    team?: any,
    teamId?: string,
    number: number,
    position: number,
    lap_time: string
}

export type RaceResult = {
    id?: string,
    race?: any,
    raceId?: string,
    driver?: any,
    driverId?: string,
    team?: any,
    teamId: string,
    grid_position: number,
    dnf: boolean,
    end_position: number,
    points: number,
    laps: number,
    time: string,
    fastest_lap: number,
    fastest_lap_time: string
}