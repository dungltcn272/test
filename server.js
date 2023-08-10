const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
    const { username, password, avt } = req.body;

    // Xử lý logic tạo người dùng và trả về kết quả, bao gồm link ảnh avt
    // Ví dụ: Tạo người dùng thành công
    const response = {
        message: 'User created successfully',
        avtLink: avt,
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
