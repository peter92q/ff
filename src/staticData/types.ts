export interface stack{ 
    name: string;
    icon: string;
}

export interface Services{
    title: string;
    icon: string;
    stack: stack[];
}

export interface Certificates{
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[],
    link: string;
}

export enum SelectedPage {
    Home = "",
    About = "about",
    Certificates = "certificates",
    Contact = "contact",
    Projects = "projects",
}
