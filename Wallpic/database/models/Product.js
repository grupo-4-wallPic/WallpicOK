module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define ("Products",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    name: DataTypes.STRING,

    description: DataTypes.TEXT,

    categoryId: DataTypes.INTEGER,

    images:  DataTypes.STRING
    
},{tableName: "PRODUCTS", timestamps: false});
    
    Product.associate = function(models){
    Product.belongsTo(models.Categories, {foreignKey: 'categoryId', as: 'category'}) 
}

return Product;
}