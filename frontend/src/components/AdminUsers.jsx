import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');


    useEffect(() => {
        // Fetch all users on component load
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/admins/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const deleteUser = async (userId) => {

        try {
            await axios.delete(`http://localhost:5000/api/admins/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            // alert('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user');
        }
    };

    if (loading) {
        return <div className="text-center mt-10">Loading users...</div>;
    }

    return (
        <div className='flex ='>
            {/* //? side bar */}
            <Sidebar/>

            {/* //? main section */}
            <div className="p-6 bg-gray-50 min-h-screen w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Username</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Gender</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id} className="border-b">
                                        <td className="px-6 py-4">{user.name || 'N/A'}</td>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.gender || 'N/A'}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => deleteUser(user._id)}
                                                className="text-red-500 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
