// import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function About(/**{ data } */) {

    // const amiibos = data.jsonJson.amiibo;

    return (
        <Layout>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora non temporibus eius placeat quisquam. Sit quasi, debitis at tenetur eligendi hic est accusamus earum laudantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora non temporibus eius placeat quisquam. Sit quasi, debitis at tenetur eligendi hic est accusamus earum laudantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora non temporibus eius placeat quisquam. Sit quasi, debitis at tenetur eligendi hic est accusamus earum laudantium.</p>
                {/* <div>
                    {
                        amiibos.map((amiibo, i) => 
                        <div key={i}>
                            <h1>{amiibo.name}</h1>
                            <img src={amiibo.image} alt="#" />
                        </div>
                        )
                    }
                </div> */}
            </div>
        </Layout>
    )
}

// export const query = graphql`
// query amiibosQuery {
//     jsonJson {
//       amiibo {
//         amiiboSeries
//         character
//         gameSeries
//         head
//         image
//         name
//       }
//     }
//   }
// `