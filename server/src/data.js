'use strict';

const DataModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    const items = new DataModel(data);//4. s?
    res.status(200).json(item);//3. 404 to 200?
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const items = await DataModel.find({});
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.param.id;
  const items = await DataModel.find({_id:id});
  res.status(200).json(items[0]);
}

Data.deleteOneItem = async(req, res) => {//2. totally missing
  const data = req.params.index;
  const items =req.query.items;
  
}

Data.updateOneItem = async(req, res) => {
  const id = req.params.id;// 1. ? s needed?
  const data = req.body;
  const item = await DataModel.findByIdAndUpdate(id, data, {new:true, useFindAndModify:false});
  res.status(200).json(item);
}

module.exports = Data;
