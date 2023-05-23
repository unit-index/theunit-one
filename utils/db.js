export async function getUnitHourlyData(db) {
    const lastData = await db.collection('hourlydatausds').find().sort({ "time": -1 }).limit(1).toArray();
    return lastData[0].value;
}