"use strict";

const { response } = require('express');

const Item = require('./item-model.js');
const DataModel = require("./item-model.js");

const Data = {};

Data.addAnItem = async (req, res, next) => {
  try {
    const data = req.body;
    const item = new DataModel(data);
    await item.save();//added save item
    res.status(200).json(item); // 404 to 200
  } catch (e) {
    next(e.message);
  }
};

Data.getAllItems = async (req, res) => {
  const items = await DataModel.find({});
  res.status(200).json(items);
};

Data.getOneItem = async (req, res) => {
  const id = req.params.id;//added and s to params
  const items = await DataModel.find({ _id: id });
  res.status(200).json(items[0]);
};

//added
Data.deleteOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    await DataModel.deleteOne({ _id: id });
    res.status(200).json("successfully deleted");
  } catch (err) {
    console.error(err);
  }
};

Data.updateOneItem = async (req, res) => {
  try {
    const id = req.params.id;//added
    const data = req.body;
    const item = await DataModel.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModify: false,
    });
    console.log("from updateOneItem", id, data);
    res.status(200).json(item);
  } catch (err) {
    console.error(err);//added
  }
};

module.exports = Data;
