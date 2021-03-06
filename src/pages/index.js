import React from "react"
import useForm from "../components/helpers/useForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const form = () => {
  const { values, handleChange, handleSubmit } = useForm(login)

  function login() {
    console.log(values)
  }

  return (
    <Layout>
      <SEO title="login" />
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
        <button type="submit">Login</button>
      </form>
      <Link to="/sign-up">Cadastre-se</Link>
    </Layout>
  )
}

export default form
