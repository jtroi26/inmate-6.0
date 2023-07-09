var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.gettables = async (req, res) => {
    
    const allinmates = await prisma.inmateRecord.findMany();
    res.render('tables', {allinmates})

    }
exports.postIndex = async (req, res) => {
        res.render('tables');
        }