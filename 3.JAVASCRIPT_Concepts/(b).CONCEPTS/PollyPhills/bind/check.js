let employee2= {
    fName: 'Mukul',
    getFullName: function(fromArgs) {
        console.log(this.fName+ fromArgs);
    }
}
employee2.getFullName();