import { gql } from '@apollo/client';
import { Fragment, useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import apolloClient from '../lib/apolloClient'


export const CREATE_PRINT = gql`
  mutation CreatePrint($title: String) {
    createPrint(data: {title: $title}) {
      title
    }
  }
`;

export default function Submit(){
  const [allData, setAllData] = useState([])

  const registerPrint = async event => {
    event.preventDefault() 
    const form = event.target
    const formData = new window.FormData(form)
    const title = String(formData.get('print')).substring(0,500)
    form.reset()

    const { data } = await apolloClient.mutate({
      mutation: CREATE_PRINT,
      variables: {title} ,
      })

    setAllData([{id: String(Math.random()).replace('0.',''),
      title: title
    },...allData])
  }

  return (
    <>
      <section className={utilStyles.headingMd}>
      <form onSubmit={registerPrint}>
        <label htmlFor="print">Imprimir</label>
        <input id="print" name="print" type="text" max="500" required />
        <button type="submit">PRINT</button>
      </form>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <hr />
        <h2 className={utilStyles.headingLg}>Printed</h2>
        <ul className={utilStyles.list}>
        <Fragment>
          {allData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
            <br />----------------
            </li>
          ))}
        </Fragment>
        </ul>
      </section>
    </>
  )
}