<template>
  <div id="app">
    <ul id="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/anfrage">Anfrage</router-link></li>
      <li><router-link to="/resourcen">Resourcen</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>
