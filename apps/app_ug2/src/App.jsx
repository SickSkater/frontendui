import 'bootstrap/dist/css/bootstrap.min.css';

//import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
//import { AppRouter } from './AppRouter';
//^musi byt zakomentovany aby se zobrazil hello world

import { AppCanvas } from '@hrbolek/uoisfrontend-gql-shared';
import { FirstEntity } from '../../../packages/candidate_page'; //import z package
import { SecondEntity } from '../../../packages/candidate_page/src/first';

export const App = () => {
    return (
        <AppCanvas>
            <FirstEntity/>
            <SecondEntity/>
        </AppCanvas>
    )
}


















// const Value = ({value}) => {
//     return (
//         <span>{value}</span>
//     )
// }

// const Name = ({name}) => {
//     return (
//         <span>Name: {name}</span>
//     )
// }

// //funcionalni komponenty
// //funkce typu komponenta prijma jediny parametr, tedy {}
// //provedu dekonstrukci objektu - {} obsahujici parametry, je to takto prehlednejsi:
// //children je neco jako keyword, vychazi z jsx
// const User = ({name, surname, children}) => {
//     return (
//         <div>{name}, {surname}<br/>{children}</div>
//     )
// }


// //obalka na obaleni jine komponenty
// const Envelope = ({children}) => {
//     return (
//         <div className='card'>{children}</div>
//     )
// }

// const readUserPageAsyncAction = createAsyncGraphQLAction(`
// {
//     userPage {
//         __typename
//         id
//         name
//         surname
//     }
// }`)

// const FirstEntity = () => {
//     //parametry urcuji jak se ma osloveni backendu delat, prvni parametr je urcujici - funkce, ktera se ma zavolat
//     //dispatchresult je raw vystup z endpointu
//     //entity je neco co se tyka skalaru - je transformovany prichozi packet a v pripade skalaru vraci skalarni hodnotu
//     //sahne si do databaze a pokud tam je, vrati ji z cache a paralelne bezi dotaz na backend
//     //entity ma podporu cache, dispatchresult ji nema
//     const { loading, error, entity, dispatchResult} = useAsyncAction(readUserPageAsyncAction, { });

//     if (loading) return <p>Loading...</p>;
//     return <div>User: <div>{JSON.stringify(dispatchResult)}</div></div>;
// }

// export const App = () => {
//     return (
//         // <Container fluid>
//         <AppCanvas>

//             <FirstEntity/>
//             {/* <Navbar className='bg-light'>
//                 <Container>
//                     <Navbar.Brand href="" className="justify-content-start"><a href='/' className='btn'>UOIS</a></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//                         <LogButton />
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar> */}

//             {/* to co je mezi opening a closing tag je children, nemusi byt stejneho typu*/}
//             Hello world!
//             <Envelope>
//                 <User name="John" surname="Newbie">
//                     <Name name="John"/>
//                     <Name name="Juliet"/>
//                     <Value value={45}/>
//                 </User> 
//             </Envelope>
//             {/* <AppRouter /> */}
//         </AppCanvas>    
//         // {/* </Container> */}
//     )
// }

