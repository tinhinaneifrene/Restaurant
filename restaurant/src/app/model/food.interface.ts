import { identifierModuleUrl } from "@angular/compiler"

export interface Food
{
    id : number;
    title: string;
    description?: string;
    price: number;
}