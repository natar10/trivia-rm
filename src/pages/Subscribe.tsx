import React, { FormEvent, useState } from 'react'
import { Button } from '../components/styled/Button'
import { SelectedOptions } from '../common/types'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Select, { OptionsType } from 'react-select'
import GameTitle from '../components/layout/GameTitle'
import Form from '../components/subscribe/Form'
import { Link } from 'react-router-dom'

const Subscribe: React.FC = () => {
  const [data, setData] = useState({ name: '', email: '', more: 'no' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: {
    target: HTMLInputElement | HTMLSelectElement
  }) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleChangeSelect = (
    selectedOption: OptionsType<SelectedOptions>,
    field: string,
  ) => {
    setData({ ...data, [field]: selectedOption })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setData({ name: '', email: '', more: 'no' })
  }

  return (
    <>
      <GameTitle />
      <Container>
        <Row>
          <Col xs={12} md={5} className="text-center px-4">
            <h1 className="trivia">Subscribe!</h1>
            <Image
              className="img-character"
              roundedCircle
              src="https://rickandmortyapi.com/api/character/avatar/365.jpeg"
            ></Image>
            <br />
            <br />
            <Link to="/">
              <Button type="submit" secondary>
                Home
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={7} className="px-4 py-4">
            <h2 className="text-center text-primary">
              <strong>Subscribe for news about Rick and Morty!</strong>
            </h2>
            <h3 className="text-center">
              Be aware of the latelest interdimensional news!
            </h3>
            <hr />

            {!sent ? (
              <form onSubmit={handleSubmit}>
                <Form
                  data={data}
                  handleChange={handleChange}
                  handleChangeSelect={handleChangeSelect}
                />

                <Button type="submit" primary>
                  SUBSCRIBE!
                </Button>
              </form>
            ) : (
              <h1>THANKS... BRRPP!</h1>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Subscribe
