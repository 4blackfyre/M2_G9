import { Admin, EditGuesser, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import {CarteiraCreate, CarteiraEdit, CarteiraList} from "./CarteirasList";
import {UtilizadorList, UtilizadorCreate, UtilizadorEdit} from "./UtilizadoresList";
import {FilmeEdit, FilmesList,FilmeCreate} from "./FilmesList";
import Dashboard from "./Dashboard";
import filmesIcon from '@material-ui/icons/Movie';
import cinemasIcon from '@material-ui/icons/Theaters';
import livrosIcon from '@material-ui/icons/ImportContacts';
import temasIcon from '@material-ui/icons/Collections';
import carteiraIcon from '@material-ui/icons/AccountBalanceWallet';
import utilizadoresIcon from '@material-ui/icons/AccountCircle';
import servicosIcon from '@material-ui/icons/Storefront';
import { CinemaCreate, CinemaEdit, CinemaList } from "./CinemasList";
import { ServicoCreate, ServicoEdit, ServicosList } from "./ServicosList";
import { TemaCreate, TemaEdit, TemaList } from "./TemasList";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="utilizadors" icon={utilizadoresIcon} list={UtilizadorList} edit={UtilizadorEdit} create={UtilizadorCreate}/>
    <Resource name="filmes" icon={filmesIcon} list={FilmesList} edit={FilmeEdit} create={FilmeCreate} />
    <Resource name="carteiras" icon={carteiraIcon} list={CarteiraList} edit={CarteiraEdit} create={CarteiraCreate}  />
    <Resource name="cinemas" icon={cinemasIcon} list={CinemaList} edit={CinemaEdit} create={CinemaCreate} />
    <Resource name="servicos" icon={servicosIcon}list={ServicosList} edit={ServicoEdit} create={ServicoCreate} />
    <Resource name="livros" icon={livrosIcon} list={ListGuesser} edit={EditGuesser}  />
    <Resource name="temas" icon={temasIcon} list={TemaList} edit={TemaEdit} create={TemaCreate} />
  </Admin>
);
  
  
export default App;
