export interface Prerequisite {
    name: string;
    finished: boolean;
}

export type Prerequisites = Prerequisite[]


export interface Course {
    name: string;
    desc: string;
    pres: Prerequisites;
}

export type Courses = Course[]

export interface PresProps {
    items: Prerequisites
}

