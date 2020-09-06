module.exports = (sequelize, DataTypes) => {

    const Purchase = sequelize.define ("Purchases",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    order_number: DataTypes.INTEGER,
    
    total: DataTypes.INTEGER,
    
    user_id: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,

    deletedAt: DataTypes.DATE,

    },{tableName: "PURCHASE"});
    
    return Purchase;
    }