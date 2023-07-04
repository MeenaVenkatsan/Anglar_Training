export type adopt={
    id:number,
    type:string,
    imagename:string,
    image:string,
    rescued:string,
    status:string    
}
export type request={
    userName: string,
    adoptPetId: number,
    adoptedStatus: string,
    petImage:string,
    email:string ,
    id:number
}
export type post={
    userId: string
      username: string,
      adoption_type: string,
      image: string,
      content: string
}