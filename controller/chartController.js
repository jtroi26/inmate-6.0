var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getChart = async (req, res) => {
    
    res.render('chart');

    }
