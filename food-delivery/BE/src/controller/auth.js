export const Login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await userModel.findOne({
      email,
    });
    if (!user) return res.status(400).send
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
