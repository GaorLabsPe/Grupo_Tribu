
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';

// --- SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'https://epyqaqxlgqcxbenaydct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweXFhcXhsZ3FjeGJlbmF5ZGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzAyOTIsImV4cCI6MjA4MDM0NjI5Mn0.4FKPSM-UfQlfrKQoXRnBps9RLCX2MT8HkqcQlEHgc5Q';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Icons
const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TikTokIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffd700" stroke="#b39200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const LoaderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="spinner"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

interface Entrepreneur {
  id: string;
  name: string; // Business Name
  ownerName: string; // Person Name
  prize: string;
  value: string;
  prizeImage: string; // The specific gift image
  logoImage: string; // The business logo
  date: Date;
  instagram: string;
  facebook?: string;
  tiktok?: string;
  website?: string;
  phone: string;
  description: string;
  category: string;
}

interface Member {
    id: number;
    phone: string;
    name: string;
    business_name: string;
}

const PREDEFINED_CATEGORIES = [
  "Moda",
  "Gastronomía",
  "Tecnología",
  "Salud y Belleza",
  "Hogar",
  "Servicios",
  "Artesanía",
  "Otro"
];

const SECRET_ACCESS_CODE = "TRIBU2024";
const ADMIN_PASSWORD = "ADMIN123";

// --- ADMIN DASHBOARD COMPONENT ---
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
    const [entries, setEntries] = useState<Entrepreneur[]>([]);
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [viewEntry, setViewEntry] = useState<Entrepreneur | null>(null);
    const [activeTab, setActiveTab] = useState<'enrolled' | 'pending'>('enrolled');

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const fetchData = async () => {
        setLoading(true);
        
        // Fetch Enrolled Entrepreneurs
        const { data: entData } = await supabase
            .from('entrepreneurs')
            .select('*')
            .order('created_at', { ascending: false });

        if (entData) {
             const mappedEntries: Entrepreneur[] = entData.map(item => ({
                  id: item.id,
                  name: item.business_name,
                  ownerName: item.owner_name,
                  phone: item.phone,
                  prize: item.prize,
                  value: item.prize_value,
                  prizeImage: item.prize_image_url,
                  logoImage: item.logo_image_url,
                  date: new Date(item.created_at),
                  instagram: item.instagram,
                  facebook: item.facebook,
                  tiktok: item.tiktok,
                  website: item.website,
                  description: item.description,
                  category: item.category
              }));
            setEntries(mappedEntries);
        }

        // Fetch Raw Members (Pre-registered)
        const { data: memData } = await supabase
            .from('members')
            .select('*')
            .order('id', { ascending: false });
        
        if (memData) {
            setMembers(memData);
        }

        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Seguro que quieres eliminar este registro?')) return;
        const { error } = await supabase.from('entrepreneurs').delete().eq('id', id);
        if (!error) {
            setEntries(entries.filter(e => e.id !== id));
            setViewEntry(null);
        } else {
            alert('Error al eliminar');
        }
    };

    const generateSeedData = async () => {
        setIsGenerating(true);
        const seedData = [
            {
                business_name: 'Burger House',
                owner_name: 'Carlos Ruiz',
                phone: '999000111',
                prize: 'Pack Familiar Royal',
                prize_value: 'S/ 85.00',
                prize_image_url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&auto=format&fit=crop&q=60',
                logo_image_url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=150&auto=format&fit=crop&q=60',
                instagram: '@burgerhouse_test',
                description: 'Las mejores hamburguesas artesanales de la ciudad con carne 100% premium.',
                category: 'Gastronomía'
            },
            {
                business_name: 'Moda Chic',
                owner_name: 'Ana López',
                phone: '999000222',
                prize: 'Outfit Verano 2024',
                prize_value: 'S/ 120.00',
                prize_image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60',
                logo_image_url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=150&auto=format&fit=crop&q=60',
                instagram: '@modachic_peru',
                description: 'Tendencias y estilo para la mujer moderna.',
                category: 'Moda'
            },
            {
                business_name: 'Tech Store',
                owner_name: 'Jorge M.',
                phone: '999000333',
                prize: 'Audífonos Bluetooth Pro',
                prize_value: 'S/ 60.00',
                prize_image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60',
                logo_image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&auto=format&fit=crop&q=60',
                instagram: '@techstore_lima',
                description: 'Gadgets y accesorios tecnológicos al mejor precio.',
                category: 'Tecnología'
            }
        ];

        try {
            const { error } = await supabase.from('entrepreneurs').insert(seedData);
            if (error) throw error;
            alert('¡3 Emprendedores de prueba creados con éxito!');
            fetchData();
        } catch (err: any) {
            console.error(err);
            alert('Error creando datos: ' + err.message);
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadCSV = () => {
        const headers = ["ID", "Negocio", "Dueño", "Celular", "Premio", "Valor", "Instagram", "Facebook", "TikTok", "Categoría"];
        const csvContent = [
            headers.join(","),
            ...entries.map(e => [e.id, e.name, e.ownerName, e.phone, e.prize, e.value, e.instagram, e.facebook || '', e.tiktok || '', e.category].join(","))
        ].join("\n");
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tribu_emprendedores_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    // Calculate Stats
    const totalValue = entries.reduce((acc, curr) => {
        const val = parseFloat(curr.value.replace(/[^0-9.]/g, '')) || 0;
        return acc + val;
    }, 0);

    // Compute Pending Users (In Member table but NOT in Entrepreneurs table)
    // IMPORTANT: Clean phones before comparing to avoid formatting issues (999-123 vs 999123)
    const enrolledPhones = new Set(entries.map(e => e.phone.replace(/\D/g, '')));
    const pendingMembers = members.filter(m => !enrolledPhones.has(m.phone.replace(/\D/g, '')));

    if (!isAuthenticated) {
        return (
            <div className="container" style={{paddingTop: '120px', minHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
                <div className="card p-40" style={{maxWidth: '400px', width: '100%', textAlign: 'center'}}>
                    <div style={{color: '#2d3436', marginBottom: '20px'}}><LockIcon /></div>
                    <h2 style={{marginBottom: '10px'}}>Admin Dashboard</h2>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="password" 
                            className="lock-input" 
                            placeholder="Contraseña Maestra"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                        />
                        <button className="btn btn-dark btn-block mt-small">Ingresar</button>
                    </form>
                    <button onClick={onLogout} className="btn-link mt-medium">Volver</button>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <div className="admin-brand">Tribu Admin</div>
                <div className="admin-menu">
                    <button className="menu-item active">Dashboard</button>
                    <button onClick={onLogout} className="menu-item">Salir</button>
                </div>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <h2>Panel de Control</h2>
                    <div className="admin-actions">
                         <button onClick={generateSeedData} className="btn btn-primary btn-with-icon" disabled={isGenerating}>
                            {isGenerating ? <LoaderIcon /> : <PlusIcon />} Generar 3 Datos de Prueba
                        </button>
                        <button onClick={downloadCSV} className="btn btn-outline btn-with-icon">
                            <DownloadIcon /> Exportar CSV
                        </button>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="kpi-card">
                        <h3>Total Inscritos</h3>
                        <div className="kpi-value">{entries.length}</div>
                    </div>
                    <div className="kpi-card">
                        <h3>Valor Acumulado</h3>
                        <div className="kpi-value text-success">S/ {totalValue.toFixed(2)}</div>
                    </div>
                    <div className="kpi-card">
                        <h3>Pendientes de Ficha</h3>
                        <div className="kpi-value" style={{color: '#ff9f43'}}>{pendingMembers.length}</div>
                    </div>
                </div>

                <div className="admin-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'enrolled' ? 'active' : ''}`}
                        onClick={() => setActiveTab('enrolled')}
                    >
                        Inscritos ({entries.length})
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pending')}
                    >
                        Pendientes ({pendingMembers.length})
                    </button>
                </div>

                <div className="table-container">
                    {activeTab === 'enrolled' ? (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Negocio</th>
                                    <th>Dueño</th>
                                    <th>Contacto</th>
                                    <th>Premio</th>
                                    <th>Valor</th>
                                    <th>Rubro</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map(entry => (
                                    <tr key={entry.id}>
                                        <td>
                                            <div className="cell-flex">
                                                <img src={entry.logoImage} className="table-img" alt=""/>
                                                <strong>{entry.name}</strong>
                                            </div>
                                        </td>
                                        <td>{entry.ownerName}</td>
                                        <td>
                                            <a href={`https://wa.me/51${entry.phone}`} target="_blank" className="table-link">
                                                {entry.phone}
                                            </a>
                                        </td>
                                        <td>{entry.prize}</td>
                                        <td>{entry.value}</td>
                                        <td><span className="badge-cat">{entry.category}</span></td>
                                        <td>
                                            <button onClick={() => setViewEntry(entry)} className="btn-icon-delete" style={{marginRight: '8px', color: '#0984e3'}}>
                                                <EyeIcon />
                                            </button>
                                            <button onClick={() => handleDelete(entry.id)} className="btn-icon-delete">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Negocio Indicado</th>
                                    <th>Celular</th>
                                    <th>Estado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingMembers.map(member => (
                                    <tr key={member.id}>
                                        <td>{member.name}</td>
                                        <td>{member.business_name}</td>
                                        <td>{member.phone}</td>
                                        <td><span className="badge-cat" style={{background: '#ffeaa7', color: '#d35400'}}>Pendiente</span></td>
                                        <td>
                                            <a 
                                                href={`https://wa.me/51${member.phone}?text=Hola%20${member.name},%20vimos%20que%20te%20registraste%20en%20La%20Tribu%20pero%20falta%20terminar%20tu%20ficha%20con%20la%20foto%20del%20premio.%20¿Necesitas%20ayuda?`} 
                                                target="_blank" 
                                                className="btn-whatsapp-small"
                                            >
                                                <WhatsAppIcon /> Cobrar Ficha
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                {pendingMembers.length === 0 && (
                                    <tr>
                                        <td colSpan={5} style={{textAlign: 'center', padding: '30px', color: '#b2bec3'}}>
                                            ¡Todo al día! No hay usuarios pendientes.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* DETAIL MODAL */}
            {viewEntry && (
                <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setViewEntry(null)}>
                    <div className="modal-content" style={{maxWidth: '800px'}}>
                        <button className="close-btn" onClick={() => setViewEntry(null)}><XIcon /></button>
                        <div className="modal-header">
                            <h2>Detalle de Inscripción</h2>
                            <p>{viewEntry.date.toLocaleDateString()}</p>
                        </div>
                        <div className="detail-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
                            <div className="detail-left">
                                <h3 style={{marginBottom: '16px', color: '#e1306c', fontSize: '1.2rem'}}>Datos del Negocio</h3>
                                <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
                                    <img src={viewEntry.logoImage} alt="logo" style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #ddd'}}/>
                                    <div>
                                        <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>{viewEntry.name}</h4>
                                        <p style={{color: '#636e72', fontSize: '0.9rem'}}>{viewEntry.category}</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Dueño:</label> <span>{viewEntry.ownerName}</span>
                                </div>
                                <div className="form-group">
                                    <label>Redes Sociales:</label> 
                                    <div className="social-links-list">
                                        {viewEntry.instagram && (
                                            <a href={`https://instagram.com/${viewEntry.instagram.replace('@','')}`} target="_blank" className="social-link-item"><InstagramIcon /> {viewEntry.instagram}</a>
                                        )}
                                        {viewEntry.facebook && (
                                             <a href={viewEntry.facebook} target="_blank" className="social-link-item"><FacebookIcon /> FB</a>
                                        )}
                                        {viewEntry.tiktok && (
                                             <a href={viewEntry.tiktok} target="_blank" className="social-link-item"><TikTokIcon /> TikTok</a>
                                        )}
                                         {viewEntry.website && (
                                             <a href={viewEntry.website} target="_blank" className="social-link-item"><GlobeIcon /> Web</a>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>WhatsApp:</label>
                                    <a href={`https://wa.me/51${viewEntry.phone}`} target="_blank" style={{color: '#00b894', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px'}}>
                                        <WhatsAppIcon /> {viewEntry.phone}
                                    </a>
                                </div>
                                <div className="form-group">
                                    <label>Descripción:</label>
                                    <p style={{background: '#f5f6fa', padding: '10px', borderRadius: '8px', fontSize: '0.9rem'}}>{viewEntry.description}</p>
                                </div>
                            </div>
                            <div className="detail-right">
                                <h3 style={{marginBottom: '16px', color: '#e1306c', fontSize: '1.2rem'}}>Datos del Premio</h3>
                                <div style={{background: '#f5f6fa', padding: '16px', borderRadius: '12px', textAlign: 'center'}}>
                                    <img src={viewEntry.prizeImage} alt="Premio" style={{width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px', marginBottom: '16px'}}/>
                                    <h4 style={{fontSize: '1.1rem', marginBottom: '8px'}}>{viewEntry.prize}</h4>
                                    <span style={{background: '#2d3436', color: 'white', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold'}}>{viewEntry.value}</span>
                                </div>
                                <button onClick={() => handleDelete(viewEntry.id)} className="btn btn-outline btn-block mt-medium" style={{color: '#d63031', borderColor: '#d63031'}}>
                                    <TrashIcon /> Eliminar Publicación
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// PRE-REGISTRATION COMPONENT (FOR GROUP SHARING)
function PreRegisterForm({ onBack }: { onBack: () => void }) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [accessCode, setAccessCode] = useState('');
    
    const [name, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (accessCode.trim().toUpperCase() === SECRET_ACCESS_CODE) {
            setIsUnlocked(true);
        } else {
            alert('Código incorrecto. Solicítalo en el grupo de WhatsApp.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            // Clean phone
            const cleanPhone = phone.replace(/\D/g, '');
            if (cleanPhone.length < 9) {
                throw new Error("El teléfono debe tener al menos 9 dígitos");
            }

            const { error } = await supabase
                .from('members')
                .insert([{
                    name: name,
                    business_name: business,
                    phone: cleanPhone
                }]);

            if (error) {
                if(error.code === '23505') throw new Error("Este número ya está registrado.");
                throw error;
            }

            setStatus('success');
        } catch (err: any) {
            console.error(err);
            setStatus('error');
            setErrorMsg(err.message || "Error al registrar.");
        }
    };

    // LOCK SCREEN
    if (!isUnlocked) {
        return (
            <div className="container" style={{paddingTop: '120px', minHeight: '80vh', display: 'flex', justifyContent: 'center'}}>
                <div className="card p-40" style={{maxWidth: '400px', width: '100%', textAlign: 'center'}}>
                    <div style={{color: '#e1306c', marginBottom: '20px'}}><LockIcon /></div>
                    <h2 style={{marginBottom: '10px'}}>Acceso Restringido</h2>
                    <p className="text-gray mb-medium">Esta zona es exclusiva para miembros del grupo.</p>
                    <form onSubmit={handleUnlock}>
                        <input 
                            type="password" 
                            className="lock-input" 
                            placeholder="Ingresa la clave del grupo"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            autoFocus
                        />
                        <button className="btn btn-dark btn-block mt-small">Desbloquear</button>
                    </form>
                    <button onClick={onBack} className="btn-link mt-medium">Volver al Inicio</button>
                </div>
            </div>
        );
    }

    if (status === 'success') {
        return (
            <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
                <div className="success-message card p-40">
                    <CheckCircleIcon />
                    <h2 className="mt-medium">¡Registro Exitoso!</h2>
                    <p>Tu número ha sido habilitado en la lista.</p>
                    <div className="note-box" style={{background: '#e3f2fd', color: '#0984e3', marginTop: '20px'}}>
                        <p style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '10px'}}>PASO 2: OBLIGATORIO</p>
                        <p>Ahora debes regresar a la página principal y llenar la ficha de inscripción con los datos de tu premio.</p>
                    </div>
                    <button onClick={() => window.location.href = window.location.origin} className="btn btn-primary btn-large mt-medium">
                        Ir a Inscribir mi Negocio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{paddingTop: '120px', minHeight: '80vh', maxWidth: '600px'}}>
             <div className="card p-40">
                 <div className="text-center mb-medium">
                    <div className="badge-secure"><LockIcon /> Zona Segura</div>
                    <h2>Pre-Registro Tribu</h2>
                    <p className="text-gray">Formulario interno para habilitar tu acceso al sistema del sorteo.</p>
                 </div>
                 
                 <form onSubmit={handleSubmit} className="clean-form">
                     <div className="form-group">
                         <label>Tu Nombre Completo</label>
                         <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Ej. Juan Pérez" />
                     </div>
                     <div className="form-group">
                         <label>Nombre de tu Negocio</label>
                         <input type="text" value={business} onChange={e => setBusiness(e.target.value)} required placeholder="Ej. Mi Tienda SAC" />
                     </div>
                     <div className="form-group">
                         <label>Número de Celular</label>
                         <div className="input-with-icon">
                             <span className="input-icon"><PhoneIcon /></span>
                             <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="Ej. 999123456" />
                         </div>
                         <p className="hint-text">Este será tu llave de acceso para participar en el sorteo.</p>
                     </div>
                     
                     {status === 'error' && <p className="error-text mb-medium">{errorMsg}</p>}
                     
                     <button className="btn btn-primary btn-block btn-large" disabled={status === 'loading'}>
                         {status === 'loading' ? 'Registrando...' : 'Registrarme en la Lista'}
                     </button>
                     
                     <button type="button" onClick={onBack} className="btn btn-outline btn-block mt-small">
                         Cancelar / Volver
                     </button>
                 </form>
             </div>
        </div>
    );
}


function App() {
  // Navigation State
  const [viewMode, setViewMode] = useState<'landing' | 'preregister' | 'admin'>('landing');

  // App Data
  const [entries, setEntries] = useState<Entrepreneur[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Steps: guide -> validation -> form -> preview -> success
  const [modalStep, setModalStep] = useState<'guide' | 'validation' | 'form' | 'preview' | 'success'>('guide');
  
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('Todas');
  
  // Validation State
  const [validationPhone, setValidationPhone] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Form State
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [prize, setPrize] = useState('');
  const [value, setValue] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [formCategory, setFormCategory] = useState(PREDEFINED_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // Images
  const [selectedPrizeImage, setSelectedPrizeImage] = useState<string | null>(null);
  const [prizeImageFile, setPrizeImageFile] = useState<File | null>(null);
  const [selectedLogoImage, setSelectedLogoImage] = useState<string | null>(null);
  const [logoImageFile, setLogoImageFile] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCategory, setSubmittedCategory] = useState('');
  
  // Admin Backdoor
  const [secretClicks, setSecretClicks] = useState(0);
  
  const prizeInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchEntries();
    
    // Check for secret URL parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get('zona') === 'tribu') {
        setViewMode('preregister');
    } else if (params.get('zona') === 'admin') {
        setViewMode('admin');
    }
    
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
        if (viewMode === 'landing') setIsPromoOpen(true);
    }, 1500);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    }
  }, [viewMode]);

  const handleSecretClick = () => {
      setSecretClicks(prev => {
          const newCount = prev + 1;
          if (newCount >= 5) {
              setViewMode('preregister');
              return 0;
          }
          return newCount;
      });
  };

  const fetchEntries = async () => {
      try {
          const { data, error } = await supabase
              .from('entrepreneurs')
              .select('*')
              .order('created_at', { ascending: false });
          
          if (error) throw error;
          
          if (data) {
              const mappedEntries: Entrepreneur[] = data.map(item => ({
                  id: item.id,
                  name: item.business_name,
                  ownerName: item.owner_name,
                  phone: item.phone,
                  prize: item.prize,
                  value: item.prize_value,
                  prizeImage: item.prize_image_url || 'https://via.placeholder.com/600x600?text=Sin+Imagen',
                  logoImage: item.logo_image_url || 'https://via.placeholder.com/150x150?text=Logo',
                  date: new Date(item.created_at),
                  instagram: item.instagram,
                  facebook: item.facebook,
                  tiktok: item.tiktok,
                  website: item.website,
                  description: item.description,
                  category: item.category
              }));
              setEntries(mappedEntries);
          }
      } catch (err) {
          console.error("Error fetching data:", err);
      } finally {
          setIsLoading(false);
      }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalStep('guide'); // Start with the guide
    setValidationPhone('');
    setValidationError('');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
  };

  const openDirectory = () => {
      setIsDirectoryOpen(true);
      document.body.style.overflow = 'hidden';
  };

  const closeDirectory = () => {
      setIsDirectoryOpen(false);
      document.body.style.overflow = 'auto';
  };

  const closePromo = () => {
      setIsPromoOpen(false);
  };

  // VALIDATION LOGIC
  const handleValidationSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsValidating(true);
      setValidationError('');
      
      const cleanPhone = validationPhone.replace(/\D/g, ''); 
      
      try {
        const { data, error } = await supabase
            .from('members')
            .select('*')
            .eq('phone', cleanPhone)
            .single();

        if (data) {
            setValidationPhone(cleanPhone); // Update state to clean number for consistency
            setOwnerName(data.name || '');
            if (data.business_name) setBusinessName(data.business_name);
            setModalStep('form');
        } else {
            setValidationError('NOT_FOUND');
        }
      } catch (err) {
          console.error(err);
          setValidationError('Error de conexión. Inténtalo de nuevo.');
      } finally {
          setIsValidating(false);
      }
  };

  const handlePrizeImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrizeImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedPrizeImage(imageUrl);
    }
  };

  const handleLogoImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedLogoImage(imageUrl);
    }
  };

  const uploadImageToSupabase = async (file: File) => {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) {
          throw uploadError;
      }

      const { data } = supabase.storage.from('images').getPublicUrl(filePath);
      return data.publicUrl;
  }

  // Handle "Next" click (to preview)
  const handlePreview = (e: React.FormEvent) => {
      e.preventDefault();
      if (!businessName || !prize || !value) return;

      if (!acceptedTerms) {
          alert('Debes aceptar los términos y condiciones para participar.');
          return;
      }

      if (formCategory === 'Otro' && !customCategory.trim()) {
          alert('Por favor especifica tu rubro.');
          return;
      }
      
      // Basic image check
      if (!selectedPrizeImage) {
          alert('Por favor sube una imagen del premio.');
          return;
      }

      setModalStep('preview');
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    try {
        let finalPrizeImageUrl = 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&auto=format&fit=crop&q=60';
        let finalLogoImageUrl = 'https://via.placeholder.com/150?text=Logo';
        
        if (prizeImageFile) {
            finalPrizeImageUrl = await uploadImageToSupabase(prizeImageFile);
        }
        if (logoImageFile) {
            finalLogoImageUrl = await uploadImageToSupabase(logoImageFile);
        }

        const formattedInsta = instagram.startsWith('@') ? instagram : (instagram ? `@${instagram}` : '');
        const finalCategory = formCategory === 'Otro' ? customCategory.trim() : formCategory;

        const { error: insertError } = await supabase
            .from('entrepreneurs')
            .insert([
                {
                    business_name: businessName,
                    owner_name: ownerName,
                    phone: validationPhone, // Already clean
                    prize: prize,
                    prize_value: value.includes('$') ? value : `$${value}`,
                    prize_image_url: finalPrizeImageUrl,
                    logo_image_url: finalLogoImageUrl,
                    instagram: formattedInsta,
                    facebook: facebook,
                    tiktok: tiktok,
                    website: website,
                    description: description || 'Emprendedor de la tribu.',
                    category: finalCategory
                }
            ]);

        if (insertError) throw insertError;

        setSubmittedCategory(finalCategory);
        setModalStep('success');
        
        fetchEntries();
        
        setTimeout(() => {
            setBusinessName('');
            setOwnerName('');
            setPrize('');
            setValue('');
            setInstagram('');
            setFacebook('');
            setTiktok('');
            setWebsite('');
            setDescription('');
            setFormCategory(PREDEFINED_CATEGORIES[0]);
            setCustomCategory('');
            setSelectedPrizeImage(null);
            setPrizeImageFile(null);
            setSelectedLogoImage(null);
            setLogoImageFile(null);
            setAcceptedTerms(false);
            if (prizeInputRef.current) prizeInputRef.current.value = '';
            if (logoInputRef.current) logoInputRef.current.value = '';
        }, 500);

    } catch (err) {
        console.error("Error submitting entry:", err);
        alert('Hubo un error al guardar. Verifica tu conexión.');
    } finally {
        setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredEntries = entries.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.instagram.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'Todas' || e.category === selectedCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  const filterCategories = React.useMemo(() => {
      const base = PREDEFINED_CATEGORIES.filter(c => c !== 'Otro');
      const fromEntries = entries.map(e => e.category);
      return ["Todas", ...Array.from(new Set([...base, ...fromEntries]))];
  }, [entries]);

  // RENDER SEPARATE VIEWS
  if (viewMode === 'preregister') {
      return <PreRegisterForm onBack={() => setViewMode('landing')} />;
  }
  
  if (viewMode === 'admin') {
      return <AdminDashboard onLogout={() => setViewMode('landing')} />;
  }

  // RENDER MAIN LANDING PAGE
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-inner">
            <div className="brand" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="brand-icon"><GiftIcon /></div>
                <span>SorteoTribu</span>
            </div>
            <div className="nav-actions">
                {/* BUTTON REMOVED FOR SECURITY - Only accessible via secret link */}
                <button onClick={() => scrollToSection('gallery')} className="nav-link">Premios</button>
                <button onClick={() => scrollToSection('benefits')} className="nav-link">Beneficios</button>
                <button onClick={openDirectory} className="nav-link">Directorio</button>
                <button onClick={openModal} className="btn btn-primary">
                  Súmate Ahora
                </button>
            </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
                <h1 className="hero-title">
                  Crece junto <br/> a la <span className="text-gradient">Tribu</span>
                </h1>
                
                <div className="hero-subtitle-container">
                    <span className="hero-lead">Cada emprendedor aporta un premio.<br/>El público participa gratis.</span>
                    <span className="power-statement">
                        Más premios <span className="highlight">=</span> Más alcance
                    </span>
                </div>

                <div className="hero-buttons">
                    <button onClick={openModal} className="btn btn-large btn-primary">
                        Unirme al Sorteo
                    </button>
                    <button onClick={() => scrollToSection('gallery')} className="btn btn-large btn-outline">
                        Ver Premios
                    </button>
                </div>
            </div>
            
            <div className="hero-visual">
               <div className="stat-card floating">
                  <span className="stat-value">{entries.length}</span>
                  <span className="stat-label">Emprendedores</span>
               </div>
               <div className="stat-card floating delay-1">
                  <span className="stat-value">{entries.length * 500}+</span>
                  <span className="stat-label">Personas Alcanzadas</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
            <div className="section-head">
                <h2 className="section-title">Galería de Premios</h2>
                <p className="section-desc">Descubre lo que están aportando otros emprendedores.</p>
            </div>
            
            {isLoading ? (
                <div className="empty-box">
                    <div className="spinner-large" style={{margin: '0 auto 20px'}}><LoaderIcon /></div>
                    <p>Cargando premios...</p>
                </div>
            ) : entries.length > 0 ? (
                <div className="masonry-grid">
                {entries.map((entry) => (
                    <div key={entry.id} className="masonry-item">
                        <div className="artwork-card">
                            <div className="image-wrapper">
                                <img src={entry.prizeImage} alt={entry.prize} />
                                <span className="category-badge-overlay">{entry.category}</span>
                            </div>
                            <div className="artwork-info">
                                <div className="artwork-header">
                                  <h4>{entry.name}</h4>
                                  <span className="price-badge">{entry.value}</span>
                                </div>
                                <p className="artwork-prize">{entry.prize}</p>
                                <div className="artwork-footer">
                                    <span className="artwork-insta">{entry.instagram}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
                <div className="empty-box">
                    <div className="icon-placeholder"><ImageIcon /></div>
                    <h3>Aún no hay flyers</h3>
                    <p>Sé el primero en sumarte a la dinámica</p>
                    <button onClick={openModal} className="btn btn-primary mt-small">
                        Subir mi Flyer
                    </button>
                </div>
            )}
        </div>
      </section>

      {/* Strategy/Benefits Section */}
      <section id="benefits" className="section bg-light">
        <div className="container">
            <div className="section-head">
                <h2 className="section-title">¿Por qué unirte?</h2>
                <p className="section-desc">Una estrategia colaborativa donde todos ganamos.</p>
            </div>
            
            <div className="grid-3">
                <div className="feature-card">
                    <div className="card-icon"><UsersIcon /></div>
                    <h3>Comunidad Activa</h3>
                    <p>Network real y apoyo mutuo para generar tracción inicial.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon"><MegaphoneIcon /></div>
                    <h3>Visibilidad Masiva</h3>
                    <p>Tu marca será etiquetada en múltiples perfiles, alcanzando nuevos clientes.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon"><TrendingUpIcon /></div>
                    <h3>Más Ventas</h3>
                    <p>El respaldo de la tribu aumenta tu credibilidad y confianza.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Directory Teaser Section */}
      <section id="directory" className="section">
        <div className="container">
             <div className="directory-teaser">
                 <div className="teaser-content">
                    <h2 className="section-title">Directorio de Aliados</h2>
                    <p>
                        Explora los perfiles de todos los emprendedores participantes, 
                        conoce su historia y contáctalos directamente.
                    </p>
                    <button onClick={openDirectory} className="btn btn-primary btn-large btn-with-icon">
                        <BookIcon /> Explorar Directorio Completo
                    </button>
                 </div>
                 <div className="teaser-visual">
                    {entries.length > 0 ? (
                        <div className="avatar-stack">
                            {entries.slice(0, 4).map((entry, index) => (
                                <img 
                                    key={entry.id} 
                                    src={entry.logoImage || entry.prizeImage} 
                                    alt={entry.name} 
                                    style={{ zIndex: 5 - index, left: `${index * 30}px` }}
                                />
                            ))}
                            <div className="avatar-count" style={{ left: `${Math.min(entries.length, 4) * 30}px` }}>
                                +{entries.length}
                            </div>
                        </div>
                    ) : (
                         <div className="empty-stack-placeholder">
                             <span>Únete para aparecer aquí</span>
                         </div>
                    )}
                 </div>
             </div>
        </div>
      </section>

      <footer className="footer-minimal">
        <div className="container">
            <div className="footer-row">
                <div className="brand">
                    <span>SorteoTribu</span>
                </div>
                <div className="organizer-info">
                    <span>Iniciativa de la comunidad de</span>
                    <a href="https://infomercado.pe/tribu/" target="_blank" rel="noopener noreferrer">
                        InfoMercado Tribu
                    </a>
                </div>
            </div>
            <div className="footer-copyright" onDoubleClick={handleSecretClick} onClick={handleSecretClick} style={{userSelect: 'none', cursor: 'pointer'}}>
                <p>© {new Date().getFullYear()} Juntos somos más fuertes.</p>
            </div>
        </div>
      </footer>

      {/* PROMO POPUP FLYER */}
      {isPromoOpen && (
          <div className="promo-overlay">
              <div className="promo-card">
                  <button className="promo-close" onClick={closePromo}><XIcon /></button>
                  <div className="promo-content">
                      <div className="promo-icon"><StarIcon /></div>
                      <h2>¡La Tribu se une!</h2>
                      <div className="promo-stats">
                          <div className="promo-stat-item">
                              <span className="val">{entries.length > 0 ? entries.length : '10+'}</span>
                              <span className="lbl">Marcas</span>
                          </div>
                          <div className="promo-separator"></div>
                          <div className="promo-stat-item">
                              <span className="val">20K+</span>
                              <span className="lbl">Alcance</span>
                          </div>
                      </div>
                      <p className="promo-text">El mayor sorteo colaborativo del año ha comenzado. Únete ahora para multiplicar tu visibilidad.</p>
                      <div className="promo-actions">
                          <button onClick={() => { closePromo(); openModal(); }} className="btn btn-primary btn-block">
                              Participar como Emprendedor
                          </button>
                          <button onClick={() => { closePromo(); scrollToSection('gallery'); }} className="btn btn-outline btn-block mt-small">
                              Ver los Premios
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* FULL SCREEN DIRECTORY OVERLAY */}
      {isDirectoryOpen && (
          <div className="directory-full-overlay">
              <div className="directory-header">
                  <div className="container">
                    <div className="dh-row-top">
                        <div className="dh-title">
                            <h2>Directorio de la Tribu</h2>
                            <span className="badge-count">{filteredEntries.length} Marcas</span>
                        </div>
                        <button className="close-directory-btn" onClick={closeDirectory}>
                            <XIcon /> <span>Cerrar</span>
                        </button>
                    </div>
                    
                    <div className="search-bar expanded mt-medium">
                        <SearchIcon />
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre, usuario o descripción..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                    </div>
                    
                    {/* Category Filter Bar */}
                    <div className="filter-bar">
                        {filterCategories.map(cat => (
                            <button 
                                key={cat}
                                className={`filter-pill ${selectedCategoryFilter === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategoryFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                  </div>
              </div>

              <div className="directory-body container">
                 {isLoading ? (
                     <div className="text-center p-10">Cargando directorio...</div>
                 ) : (
                     <div className="bio-grid">
                        {filteredEntries.map(entry => (
                            <div key={entry.id} className="bio-card">
                                <div className="bio-header">
                                    <img src={entry.logoImage || entry.prizeImage} alt={entry.name} className="bio-avatar" />
                                    <div>
                                        <h3>{entry.name}</h3>
                                        <div className="flex-col">
                                            <span className="owner-name-small">{entry.ownerName}</span>
                                            <span className="category-tag"><TagIcon /> {entry.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bio-content">
                                    <p>{entry.description}</p>
                                </div>
                                <div className="bio-footer-socials">
                                     {entry.instagram && (
                                         <button className="social-icon-btn insta" onClick={() => window.open(`https://instagram.com/${entry.instagram.replace('@','')}`, '_blank')} title="Instagram">
                                             <InstagramIcon />
                                         </button>
                                     )}
                                     {entry.facebook && (
                                         <button className="social-icon-btn fb" onClick={() => window.open(entry.facebook, '_blank')} title="Facebook">
                                             <FacebookIcon />
                                         </button>
                                     )}
                                     {entry.tiktok && (
                                         <button className="social-icon-btn tiktok" onClick={() => window.open(entry.tiktok, '_blank')} title="TikTok">
                                             <TikTokIcon />
                                         </button>
                                     )}
                                     {entry.website && (
                                         <button className="social-icon-btn web" onClick={() => window.open(entry.website, '_blank')} title="Sitio Web">
                                             <GlobeIcon />
                                         </button>
                                     )}
                                </div>
                                <button className="btn-block action-btn whatsapp" onClick={() => window.open(`https://wa.me/51${entry.phone}`, '_blank')} style={{marginTop: '10px'}}>
                                    <WhatsAppIcon /> WhatsApp / Contactar
                                </button>
                            </div>
                        ))}
                        {filteredEntries.length === 0 && (
                            <div className="no-results">
                                <p>No se encontraron resultados para "{searchTerm}" en la categoría "{selectedCategoryFilter}"</p>
                                <button className="btn btn-outline" onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategoryFilter('Todas');
                                }}>
                                    Ver todos
                                </button>
                            </div>
                        )}
                     </div>
                 )}
              </div>
          </div>
      )}

      {/* MODAL WIZARD */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={(e) => {
            if(e.target === e.currentTarget && !isSubmitting) closeModal();
        }}>
          <div className="modal-content">
            {!isSubmitting && (
                <button className="close-btn" onClick={closeModal}>
                <XIcon />
                </button>
            )}
            
            {/* STEP 0: GUIDE (ONBOARDING) */}
            {modalStep === 'guide' && (
                <div className="guide-step">
                    <div className="modal-header">
                        <h2>¡Bienvenido a la Tribu!</h2>
                        <p>Antes de empezar, asegúrate de tener lo siguiente:</p>
                    </div>
                    <div className="steps-visual">
                        <div className="step-item">
                            <div className="step-num">1</div>
                            <div className="step-icon-bg"><PhoneIcon /></div>
                            <p>Celular Registrado</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step-item">
                            <div className="step-num">2</div>
                            <div className="step-icon-bg"><ImageIcon /></div>
                            <p>Logo del Negocio</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step-item">
                            <div className="step-num">3</div>
                            <div className="step-icon-bg"><GiftIcon /></div>
                            <p>Foto del Premio</p>
                        </div>
                    </div>
                    <div className="guide-footer">
                        <button className="btn btn-primary btn-block btn-large" onClick={() => setModalStep('validation')}>
                            ¡Tengo todo listo!
                        </button>
                        <p className="hint-text mt-small">Si no estás registrado, solicita el link de acceso en el grupo de WhatsApp de la Tribu.</p>
                    </div>
                </div>
            )}

            {/* STEP 1: SUCCESS */}
            {modalStep === 'success' && (
              <div className="success-message">
                <div className="icon-success">
                    <CheckCircleIcon />
                </div>
                <h2>¡Estás dentro!</h2>
                <p>Tu perfil de <strong>{submittedCategory}</strong> ha sido creado y ya participas en el sorteo.</p>
                <div className="note-box">
                    <p><strong>Siguiente paso:</strong></p>
                    <p>Tu flyer aparecerá en la galería. Jean te contactará al {validationPhone} para coordinar.</p>
                </div>
                <button className="btn btn-dark btn-block" onClick={closeModal}>
                    Entendido
                </button>
              </div>
            )}

            {/* STEP 2: VALIDATION */}
            {modalStep === 'validation' && (
                <div className="validation-step">
                    <div className="modal-header">
                        <h2>Acceso Exclusivo</h2>
                        <p>Ingresa tu número registrado en La Tribu para continuar.</p>
                    </div>
                    <form onSubmit={handleValidationSubmit} className="clean-form">
                        <div className="form-group">
                            <label htmlFor="validationPhone">WhatsApp / Celular</label>
                            <div className="input-with-icon">
                                <span className="input-icon"><WhatsAppIcon /></span>
                                <input
                                    type="tel"
                                    id="validationPhone"
                                    placeholder="Ej. 999123456"
                                    value={validationPhone}
                                    onChange={(e) => setValidationPhone(e.target.value)}
                                    className="input-large"
                                    autoFocus
                                    required
                                    disabled={isValidating}
                                />
                            </div>
                            <p className="hint-text">
                                (Usa el número con el que te registraste en InfoMercado)
                            </p>
                            
                            {validationError === 'NOT_FOUND' ? (
                                <div className="error-box">
                                    <p>Tu número no está en la base de datos.</p>
                                    <button 
                                        type="button"
                                        className="btn-whatsapp-redirect"
                                        onClick={() => window.open(`https://wa.me/51946770895?text=Hola,%20soy%20emprendedor%20y%20quiero%20unirme%20al%20grupo%20Tribu%20para%20participar%20en%20el%20sorteo.`, '_blank')}
                                    >
                                        <WhatsAppIcon /> Escribir al Admin (+51 946 770 895)
                                    </button>
                                </div>
                            ) : validationError && (
                                <p className="error-text">{validationError}</p>
                            )}

                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-large" disabled={isValidating}>
                            {isValidating ? (
                                <span style={{display: 'flex', alignItems: 'center', gap: '10px'}}><LoaderIcon /> Verificando...</span>
                            ) : 'Validar Acceso'}
                        </button>
                    </form>
                    <div className="validation-footer">
                        <p>¿No tienes acceso? Habla con el administrador.</p>
                    </div>
                </div>
            )}

            {/* STEP 3: FULL FORM */}
            {modalStep === 'form' && (
              <>
                <div className="modal-header">
                    <h2>Ficha de Inscripción</h2>
                    <p>Validado: <span className="text-success">{validationPhone}</span></p>
                </div>
                
                <form onSubmit={handlePreview} className="clean-form">
                  
                  {/* SECTION 1: BUSINESS PROFILE */}
                  <div className="form-section-label">
                      <span className="section-num">1</span>
                      <h3>Perfil del Negocio (Directorio)</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group" style={{flex: 1}}>
                         <label>
                             Logo <InfoIcon /> 
                             <span className="helper-badge">1:1</span>
                         </label>
                         <label className="mini-upload">
                            {selectedLogoImage ? (
                                <img src={selectedLogoImage} alt="Logo" className="mini-preview" />
                            ) : (
                                <div className="mini-placeholder"><ImageIcon /> Subir Logo</div>
                            )}
                            <input type="file" ref={logoInputRef} onChange={handleLogoImageChange} className="hidden" accept="image/*"/>
                         </label>
                         <span className="input-helper">Rec: 500x500px</span>
                    </div>
                    <div style={{flex: 2}}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Comercial</label>
                            <input
                            type="text"
                            id="name"
                            placeholder="Ej. Estudio Creativo"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                            disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerName">Tu Nombre</label>
                            <div className="input-with-icon">
                                <span className="input-icon"><UserIcon /></span>
                                <input
                                type="text"
                                id="ownerName"
                                placeholder="Ej. Juan Pérez"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                                required
                                disabled={isSubmitting}
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Rubro / Categoría</label>
                    <select 
                        id="category"
                        value={formCategory}
                        onChange={(e) => {
                            setFormCategory(e.target.value);
                            if (e.target.value !== 'Otro') setCustomCategory('');
                        }}
                        className="form-select"
                        disabled={isSubmitting}
                    >
                        {PREDEFINED_CATEGORIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                    {formCategory === 'Otro' && (
                         <input
                            type="text"
                            className="input-custom-category"
                            placeholder="Especifica tu rubro (Ej. Veterinaria)..."
                            value={customCategory}
                            onChange={(e) => setCustomCategory(e.target.value)}
                            required
                            disabled={isSubmitting}
                        />
                    )}
                  </div>

                  <div className="form-group">
                     <label>Redes Sociales (Opcional)</label>
                     <div className="social-grid">
                        <div className="input-with-icon">
                            <span className="input-icon"><InstagramIcon /></span>
                            <input
                            type="text"
                            placeholder="Instagram"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            disabled={isSubmitting}
                            />
                        </div>
                         <div className="input-with-icon">
                            <span className="input-icon"><FacebookIcon /></span>
                            <input
                            type="text"
                            placeholder="Link Facebook"
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                            disabled={isSubmitting}
                            />
                        </div>
                         <div className="input-with-icon">
                            <span className="input-icon"><TikTokIcon /></span>
                            <input
                            type="text"
                            placeholder="Link TikTok"
                            value={tiktok}
                            onChange={(e) => setTiktok(e.target.value)}
                            disabled={isSubmitting}
                            />
                        </div>
                         <div className="input-with-icon">
                            <span className="input-icon"><GlobeIcon /></span>
                            <input
                            type="text"
                            placeholder="Sitio Web"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            disabled={isSubmitting}
                            />
                        </div>
                     </div>
                  </div>

                  <div className="form-group">
                     <label htmlFor="description">Breve reseña</label>
                     <textarea
                        id="description"
                        rows={2}
                        placeholder="Describe qué hace tu negocio en 1 oración..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-textarea"
                        required
                        disabled={isSubmitting}
                     />
                  </div>
                  
                  {/* SECTION 2: GIVEAWAY INFO */}
                  <div className="form-section-label mt-medium">
                      <span className="section-num">2</span>
                      <h3>Datos del Sorteo (Galería)</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="prize">Premio a aportar</label>
                        <input
                        type="text"
                        id="prize"
                        placeholder="Ej. Sesión de fotos"
                        value={prize}
                        onChange={(e) => setPrize(e.target.value)}
                        required
                        disabled={isSubmitting}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="value">Valor Comercial</label>
                        <input
                        type="text"
                        id="value"
                        placeholder="Ej. S/ 50.00"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                        disabled={isSubmitting}
                        />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                        Foto del Premio
                        <span className="helper-badge">1080x1080px (Post)</span>
                    </label>
                    <label className={`upload-area ${isSubmitting ? 'disabled' : ''}`}>
                        {selectedPrizeImage ? (
                            <div className="preview-container">
                                <img src={selectedPrizeImage} alt="Preview" />
                                {!isSubmitting && (
                                    <button 
                                        className="change-img-btn"
                                        onClick={(e) => {
                                            e.preventDefault(); 
                                            setSelectedPrizeImage(null);
                                            setPrizeImageFile(null);
                                            if(prizeInputRef.current) prizeInputRef.current.value = '';
                                        }}
                                    >
                                        Cambiar imagen
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="upload-placeholder">
                                <ImageIcon />
                                <span>Subir Flyer o Foto del Producto</span>
                                <span className="upload-hint">Formatos recomendados: Cuadrado (1:1) o Historia (9:16)</span>
                            </div>
                        )}
                        <input 
                            type="file" 
                            accept="image/*"
                            ref={prizeInputRef}
                            onChange={handlePrizeImageChange}
                            className="hidden"
                            disabled={isSubmitting}
                        />
                    </label>
                  </div>
                  
                  <div className="terms-checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            disabled={isSubmitting}
                        />
                        <span>
                            Declaro que soy miembro de la Tribu y me comprometo a entregar el premio descrito en caso de salir sorteado, cumpliendo con la veracidad de la información.
                        </span>
                    </label>
                  </div>

                  <div className="form-footer">
                      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                        Ver Vista Previa
                      </button>
                  </div>
                </form>
              </>
            )}

            {/* STEP 4: PREVIEW */}
            {modalStep === 'preview' && (
                <div className="preview-step">
                     <div className="modal-header">
                        <h2>Vista Previa</h2>
                        <p>Así se verá tu participación en la web.</p>
                    </div>

                    <div className="preview-container-box">
                        <span className="preview-label">Tu Tarjeta en la Galería</span>
                        {/* Artwork Card Preview (Reusing component structure) */}
                        <div className="artwork-card" style={{maxWidth: '300px', margin: '0 auto'}}>
                            <div className="image-wrapper">
                                <img src={selectedPrizeImage || 'https://via.placeholder.com/600'} alt="Preview" />
                                <span className="category-badge-overlay">{formCategory === 'Otro' ? customCategory : formCategory}</span>
                            </div>
                            <div className="artwork-info">
                                <div className="artwork-header">
                                  <h4>{businessName}</h4>
                                  <span className="price-badge">{value}</span>
                                </div>
                                <p className="artwork-prize">{prize}</p>
                                <div className="artwork-footer" style={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
                                    {instagram && <span className="badge-cat" style={{fontSize: '0.7rem'}}><InstagramIcon /></span>}
                                    {facebook && <span className="badge-cat" style={{fontSize: '0.7rem'}}><FacebookIcon /></span>}
                                    {tiktok && <span className="badge-cat" style={{fontSize: '0.7rem'}}><TikTokIcon /></span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-footer" style={{display: 'flex', gap: '10px'}}>
                         <button 
                            className="btn btn-outline btn-block" 
                            onClick={() => setModalStep('form')}
                            disabled={isSubmitting}
                         >
                            <EditIcon /> Editar
                        </button>
                         <button 
                            className="btn btn-primary btn-block" 
                            onClick={handleFinalSubmit}
                            disabled={isSubmitting}
                         >
                            {isSubmitting ? (
                                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                                    <LoaderIcon /> Publicando...
                                </span>
                            ) : 'Confirmar y Publicar'}
                        </button>
                    </div>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
