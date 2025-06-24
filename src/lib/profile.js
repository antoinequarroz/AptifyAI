import { supabase } from './supabase';

// Crée un profil après inscription avec rôle
export async function createProfile(user, role = 'student') {
  if (!user) return;
  const { id, email } = user;
  return supabase.from('profiles').insert({ id, email, role });
}

// Récupère le profil de l'utilisateur courant
export async function getProfile(userId) {
  if (!userId) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) return null;
  return data;
}
