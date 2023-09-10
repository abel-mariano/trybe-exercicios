// Exercício 06
const service = require('../services/accountsService');

const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await service.getAccountById(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// Exercício 07
const getAccountByIdLazy = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await service.getAccountByIdLazy(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// Exercício Bônus 01
const saveAccountAndProfile = async (req, res) => {
  try {    
    const save = await service.saveAccountAndProfile(req.body);

    if (save.message) {
      return res.status(404).json(save);
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  saveAccountAndProfile,
};