import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCollages = () => {
 
  const { data: colleges = [],refetch, isLoading } = useQuery({
    queryKey: ["colleges"], queryFn: async () => {
        const res = await axios.get(`https://mindmeld-academy-server.vercel.app/colleges`);
        console.log(colleges)
        return res.data;
    }
});
    return [colleges,isLoading]
};

export default UseCollages;