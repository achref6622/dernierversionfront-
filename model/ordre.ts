import {PortefeuilleAction} from './portefeuille-action';

export class Ordre {
   id: number;
  dateCreation: Date;
    dateExecution: Date;
   quantite: number;
 etat: string;
  prix: number;


  portefeuillAction: PortefeuilleAction;
}
