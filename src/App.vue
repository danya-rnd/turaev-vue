<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }

</script>

<style lang="sass">
  @import './assets/fonts/stylesheet.css'

  *
    padding: 0
    margin: 0
  body
    font-family: Gilroy
  .content
    position: relative
    z-index: 20
    max-width: 1226px
    width: 100%
    margin: 0 auto
  .border__button
    display: block
    padding: 27px 35px
    text-decoration: none
    color: #fff
    border: 1px solid #FFFFFF
    border-radius: 40px
    background: none
    font-style: normal
    font-weight: normal
    font-size: 24px
    line-height: 28px
    transition: .4s
    cursor: pointer
    &_black
      color: #000
      border-color: #000
    &_about
      margin-top: 40px
      font-size: 18px
      padding: 16px 40px
    &:hover
      color: #000
      background: #fff
  h2
    font-size: 50px
    font-weight: bold
    line-height: 60px
  .container-fluid
    position: relative
    max-width: 973px
    width: 100%
    margin: 0 auto
  h1
    padding-bottom: 46px
    font-size: 40px
    line-height: 48px

</style>
