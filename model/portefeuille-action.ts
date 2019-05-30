import {Portefeuille} from './portefeuille';
import {Action} from './action';
import {PortefeuilleActionId} from './portefeuille-action-id';

export class PortefeuilleAction {
  id: PortefeuilleActionId;
  nbrAction: number;
  portefeuille: Portefeuille;
  action: Action;
}
