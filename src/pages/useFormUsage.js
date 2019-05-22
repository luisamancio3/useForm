import useForm from "../components/helpers/useForm"
import RenderForm from "../components/helpers/renderForm"

import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"

const test = () => {
  const { values, handleChange, handleSubmit } = useForm(test)

  function test() {
    console.log(values)
  }

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "email",
      required: true,
      value: "v12",
    },
    { name: "senha", type: "password", placeholder: "senha", required: true },
    { name: "extra", type: "text", placeholder: "extra", required: false },
    { name: "s", type: "text", placeholder: "s", required: false },
  ]

  return (
    <Layout>
      <SEO title="teste" />
      <form onSubmit={handleSubmit}>
        <RenderForm fields={fields} onChangeCallback={handleChange} />
        <button type="submit">submit</button>
      </form>
    </Layout>
  )
}

export default test
