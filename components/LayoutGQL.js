import Layout from "./Layout"

export default function LayoutGQL({children}) {
  return (
    <Layout>
        <div>
          Hola
          {children}
        </div>
    </Layout>
  )
}
