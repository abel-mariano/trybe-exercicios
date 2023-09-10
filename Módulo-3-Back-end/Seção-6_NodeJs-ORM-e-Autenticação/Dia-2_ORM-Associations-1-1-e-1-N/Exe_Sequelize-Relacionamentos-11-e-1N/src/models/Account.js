// Exercício 01
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'Accounts',
      underscored: true,
    });

    // Exercício 04
    Account.associate = (models) => {
      Account.hasOne(models.Profile, {
        foreignKey: 'accountId',
        as: 'profile',
      });
      
      // Exercício 05
      Account.hasMany(models.Comment, {
        foreignKey: 'accountId',
        as: 'comments',
      });
    };

  return Account;
};