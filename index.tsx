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
  phone: string;
  description: string;
  category: string;
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

function App() {
  const [entries, setEntries] = useState<Entrepreneur[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'validation' | 'form' | 'success'>('validation');
  
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
  const [description, setDescription] = useState('');
  const [formCategory, setFormCategory] = useState(PREDEFINED_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState('');
  
  // Images (State for Preview and Files for Upload)
  const [selectedPrizeImage, setSelectedPrizeImage] = useState<string | null>(null);
  const [prizeImageFile, setPrizeImageFile] = useState<File | null>(null);
  
  const [selectedLogoImage, setSelectedLogoImage] = useState<string | null>(null);
  const [logoImageFile, setLogoImageFile] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCategory, setSubmittedCategory] = useState('');
  
  const prizeInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchEntries();
    
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Trigger Promo Popup
    const timer = setTimeout(() => {
        setIsPromoOpen(true);
    }, 1500);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    }
  }, []);

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
                  description: item.description,
                  category: item.category
              }));
              setEntries(mappedEntries);
          }
      } catch (err) {
          console.error("Error fetching data:", err);
          // Fallback or empty state handled by empty array
      } finally {
          setIsLoading(false);
      }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalStep('validation');
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
      
      const cleanPhone = validationPhone.replace(/\D/g, ''); // Remove non-digits
      
      try {
        const { data, error } = await supabase
            .from('members')
            .select('*')
            .eq('phone', cleanPhone)
            .single();

        if (data) {
            setOwnerName(data.name || '');
            if (data.business_name) setBusinessName(data.business_name);
            setModalStep('form');
        } else {
            setValidationError('Este número no aparece en la base de datos de La Tribu.');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !prize || !value) return;

    // Validate custom category
    if (formCategory === 'Otro' && !customCategory.trim()) {
        alert('Por favor especifica tu rubro.');
        return;
    }

    setIsSubmitting(true);
    
    try {
        let finalPrizeImageUrl = 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&auto=format&fit=crop&q=60';
        let finalLogoImageUrl = 'https://via.placeholder.com/150?text=Logo';
        
        // Upload images if they exist
        if (prizeImageFile) {
            finalPrizeImageUrl = await uploadImageToSupabase(prizeImageFile);
        }
        if (logoImageFile) {
            finalLogoImageUrl = await uploadImageToSupabase(logoImageFile);
        }

        const formattedInsta = instagram.startsWith('@') ? instagram : `@${instagram}`;
        const finalCategory = formCategory === 'Otro' ? customCategory.trim() : formCategory;

        const { error: insertError } = await supabase
            .from('entrepreneurs')
            .insert([
                {
                    business_name: businessName,
                    owner_name: ownerName,
                    phone: validationPhone,
                    prize: prize,
                    prize_value: value.includes('$') ? value : `$${value}`,
                    prize_image_url: finalPrizeImageUrl,
                    logo_image_url: finalLogoImageUrl,
                    instagram: formattedInsta,
                    description: description || 'Emprendedor de la tribu.',
                    category: finalCategory
                }
            ]);

        if (insertError) throw insertError;

        setSubmittedCategory(finalCategory);
        setModalStep('success');
        
        // Refresh local list
        fetchEntries();
        
        // Clear form
        setTimeout(() => {
            setBusinessName('');
            setOwnerName('');
            setPrize('');
            setValue('');
            setInstagram('');
            setDescription('');
            setFormCategory(PREDEFINED_CATEGORIES[0]);
            setCustomCategory('');
            setSelectedPrizeImage(null);
            setPrizeImageFile(null);
            setSelectedLogoImage(null);
            setLogoImageFile(null);
            if (prizeInputRef.current) prizeInputRef.current.value = '';
            if (logoInputRef.current) logoInputRef.current.value = '';
        }, 500);

    } catch (err) {
        console.error("Error submitting entry:", err);
        alert('Hubo un error al guardar tu participación. Inténtalo de nuevo.');
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

  // Calculate unique categories for the filter bar
  const filterCategories = React.useMemo(() => {
      const base = PREDEFINED_CATEGORIES.filter(c => c !== 'Otro');
      const fromEntries = entries.map(e => e.category);
      // Remove duplicates
      return ["Todas", ...Array.from(new Set([...base, ...fromEntries]))];
  }, [entries]);

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
                                {/* For the Prize Gallery, we show the Prize Image */}
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
                                    // For Directory visual, we prefer logo, fallback to prize image
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
            <div className="footer-copyright">
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
                                            <span className="bio-handle">{entry.instagram}</span>
                                            <span className="category-tag"><TagIcon /> {entry.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bio-content">
                                    <p>{entry.description}</p>
                                </div>
                                <div className="bio-footer">
                                    <button className="action-btn insta" onClick={() => window.open(`https://instagram.com/${entry.instagram.replace('@','')}`, '_blank')}>
                                        <InstagramIcon /> Seguir
                                    </button>
                                    <button className="action-btn whatsapp" onClick={() => window.open(`https://wa.me/51${entry.phone}`, '_blank')}>
                                        <PhoneIcon /> Contactar
                                    </button>
                                </div>
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
                            <label htmlFor="validationPhone">Número de Celular</label>
                            <div className="input-with-icon">
                                <span className="input-icon"><PhoneIcon /></span>
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
                            {validationError && (
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
                        <p>¿No eres de La Tribu? <a href="https://infomercado.pe/tribu/" target="_blank">Únete aquí</a></p>
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
                
                <form onSubmit={handleSubmit} className="clean-form">
                  
                  {/* SECTION 1: BUSINESS PROFILE */}
                  <div className="form-section-label">
                      <span className="section-num">1</span>
                      <h3>Perfil del Negocio (Directorio)</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group" style={{flex: 1}}>
                         <label>Logo del Negocio</label>
                         <label className="mini-upload">
                            {selectedLogoImage ? (
                                <img src={selectedLogoImage} alt="Logo" className="mini-preview" />
                            ) : (
                                <div className="mini-placeholder"><ImageIcon /> Logo</div>
                            )}
                            <input type="file" ref={logoInputRef} onChange={handleLogoImageChange} className="hidden" accept="image/*"/>
                         </label>
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

                  <div className="form-row">
                      <div className="form-group" style={{ flex: 1 }}>
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
                                placeholder="Especifica tu rubro..."
                                value={customCategory}
                                onChange={(e) => setCustomCategory(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                        )}
                      </div>
                      <div className="form-group" style={{ flex: 1.5 }}>
                        <label htmlFor="instagram">Instagram</label>
                        <div className="input-with-icon">
                            <span className="input-icon">@</span>
                            <input
                            type="text"
                            id="instagram"
                            placeholder="tu_usuario"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            required
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
                        placeholder="Ej. $50.000"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                        disabled={isSubmitting}
                        />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Foto del Premio / Flyer</label>
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
                                <span>Subir Foto del Producto</span>
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

                  <div className="form-footer">
                      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                                <LoaderIcon /> Guardando y Subiendo...
                            </span>
                        ) : 'Confirmar Participación'}
                      </button>
                  </div>
                </form>
              </>
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