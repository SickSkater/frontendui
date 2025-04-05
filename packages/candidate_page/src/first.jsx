import 'bootstrap/dist/css/bootstrap.min.css';

import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared' //import funkci pro asyncaction atd

const Name = ({name}) => {
    return (
        <span>Name: {name}</span>
    )
}

const User = ({name, surname, children}) => {
    return (
        <div>{name}, {surname}<br/>{children}</div>
    )
}

//obalka na obaleni jine komponenty
const Envelope = ({children}) => {
    return (
        <div className='card'>{children}</div>
    )
}

//opacne apostrofy - vice radkovy string
const readUserPageAsyncAction = createAsyncGraphQLAction(`
{
    userPage {
        __typename
        id
        name
        surname
    }
}`)

//exportovatelna entita - aby ji slo exportovat a pouzit v index.js
export const FirstEntity = () => {
    const { loading, error, entity, dispatchResult} = useAsyncAction(readUserPageAsyncAction, { });

    if (loading) return <p>Loading...</p>;
    return <div>User: <div>{JSON.stringify(dispatchResult)}</div></div>;
}

const readEmailsAsyncAction = createAsyncGraphQLAction(`
{
    userPage {
        email
    }
}`)

export const SecondEntity = () => {
    const { loading, error, entity, dispatchResult} = useAsyncAction(readEmailsAsyncAction, { });

    if (loading) return <p>Loading...</p>;
    return <div className=''>Emails:<div>{JSON.stringify(dispatchResult)}</div></div>;
}