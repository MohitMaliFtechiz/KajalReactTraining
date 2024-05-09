const express = require('express');
const axios = require('axios')

const getAllProduct = async("/", (req, res) => {
        const { username, age } = req.body;
        console.log("Received username:", username);
        console.log("Received username:", age);
        res.status(200).json({msg:"I am getAllProduct"});
})
const getAllProductTesting = async("/", (req, res) => {
    res.status(200).json({msg:"I am getAllProductTesting"});
})

module.exports  = {getAllProduct, getAllProductTesting};