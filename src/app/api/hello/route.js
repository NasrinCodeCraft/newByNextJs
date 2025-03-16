export async function GET(){
    try{
        // throw new Error("خطا"); ایجاد خطای عمد برای دیدن 500
        return new Response(
            JSON.stringify({message:"سلام خوش آمدید"}),
            {status: 200}
        )
    }catch(error){
        console.error(error);
        return new Response(
            JSON.stringify({message: "عملیات با شکست مواجه شد"}),
            {status: 500}
        )
    }
}