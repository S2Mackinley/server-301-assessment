"use strict";

const DataModel = require("./item-model.js");

const Data = {};

Data.addAnItem = async (req, res, next) => {
  try {
    const data = req.body;
    const items = new DataModel(data);
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
  const index = parseInt(req.params.index);
  const items = req.query.item;

  await Item.findOne({_id:id}, (err, entry) => {
    const newItemArr = entry.items.filter((item, i) => {
      return i !== index;
    })
    entry.items = newItemArr;
    entry.save();
    response.status(200).send('successfully deleted!');
  })
}
Data.updateOneItem = async (req, res) => {
  const id = req.params.id; //s needed
  const data = req.body;
  const item = await DataModel.findByIdAndUpdate(id, data, {
    new: true,
    useFindAndModify: false,
  });
  res.status(200).json(item);
};

module.exports = Data;
