import {List, Datagrid, TextField, DateField,
    ReferenceField, EditButton, DeleteButton, Create, Edit, SimpleForm, 
    TextInput, DateInput, 
    ReferenceInput, SelectInput, Filter} from "react-admin";

const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Nome filme" source="nome" alwaysOn />
    <ReferenceInput label="Cinemas" source="cinemaId" 
    reference="cinemas" allowEmpty>
        <SelectInput optionText="nome" />
    </ReferenceInput>
    </Filter>
    
export const LivrosList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="realizador" />
            <TextField source="produtora" />
            <DateField source="ano" />
            <ReferenceField source="carteiraId" reference="carteiras">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField source="cinemaId" reference="cinemas">
                <TextField source="nome" />
            </ReferenceField>
            <ReferenceField source="servicoId" reference="servicos">
                <TextField source="nome" />
            </ReferenceField>
            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);