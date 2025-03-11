import React, { useState } from 'react';

const ProfileImg = () => {
    
    return (
        <div>
            <div className='w-full h-[400px] bg-white shadow-md '>
                <h1 className='px-4 py-6 text-lg font-semibold bg-gray-200'>Ảnh đại diện</h1>
                <div className='mt-2 space-y-3 text-center '>
                    <p className='text-center'>Ảnh đại diện</p>
                    <div class="h-32 w-32 bg-gray-200 mx-auto mb-4 rounded-full"></div>
                    <p class="text-gray-500">JPG hoặc PNG không lớn hơn 5 MB</p>
                    <button className="px-4 py-2 text-white bg-orange-400 rounded-md cursor-pointer ">
                        Tải ảnh lên
                        <input type="file" className="hidden mt-3" />
                    </button>
                    <div className="px-4 py-2 text-white bg-orange-400 cursor-pointer ">
                        <button>
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileImg;