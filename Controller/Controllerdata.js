const datamod = require("../Model/Datamodel");

exports.getalldata = async (req, res) => {
  try {
    const alldata = await datamod.find();
    res.status(200).json({ success: true, msg: alldata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getsingledata = async (req, res) => {
  try {
    const singledata = await datamod.findById();
    res.status(200).json({ success: true, msg: singledata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createdata = async (req, res) => {
  console.log("req" , req.body);
  try {
    const newdata = await datamod.create(req.body);
    res.status(200).json({ success: true, msg: newdata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updatedata = async (req, res) => {
  try {
    const dataupdate = await datamod.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, msg: dataupdate });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deletedata = async (req, res) => {
  try {
    const deldata = await datamod.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, msg: deldata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
