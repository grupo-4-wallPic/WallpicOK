module.exports = (sequelize, DataTypes) => {

    const Purchase = sequelize.define ("Purchase",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    order_number: DataTypes.INTEGER,
    
    total: DataTypes.INTEGER,
    
    user_id: DataTypes.INTEGER,

    },{tableName: "PURCHASE"});
    
    return Purchase;
    }