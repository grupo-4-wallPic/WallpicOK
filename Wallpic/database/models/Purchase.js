module.exports = (sequelize, DataTypes) => {

    const Purchase = sequelize.define ("Purchases",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    order_number: DataTypes.INTEGER,
    
    total: DataTypes.DECIMAL(6,2),
    
    user_id: DataTypes.INTEGER,

    },{tableName: "PURCHASE"});
    
    return Purchase;
    }