module.exports = (res, success, data, message) => {
    return res.json({ success, data, message });
};