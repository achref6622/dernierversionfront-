import {Users} from './users';
import {Portefeuille} from './portefeuille';
import {Gestionnaire} from './gestionnaire';

export class Client extends  Users {
  portefeuille: Portefeuille;
  gestionnaire: Gestionnaire;
}
