const getNotifcationsCount =() =>{
    return new Promise((resolve) =>{
        setTimeout(() =>resolve("asa"), 5000)
    })
};
export async function getNotificationService(){
    console.warn("Real Notification service");
    await getNotifcationsCount();
    return {count: 124001};
}
 