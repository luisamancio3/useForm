import React from "react"
import { Link } from "gatsby"
import useForm from "../components/helpers/useForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const { values, handleChange, handleSubmit } = useForm(cadastro)

  function cadastro() {
    console.log(values)
  }

  return (
    <Layout>
      <SEO title="Cadastro" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          placeholder="senha"
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">Login</Link>
    </Layout>
  )
}

export default SecondPage
