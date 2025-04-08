import { supabase } from '../supabaseClient';
export const getCajas = async () => {
    const { data, error } = await supabase
        .from('cajas')
        .select('*')
        .order('id');
    if (error)
        throw error;
    return data;
};
export const saveSelectedBox = async (cajaId) => {
    // Desactivar selección anterior
    await supabase
        .from('selected_box')
        .update({ active: false })
        .eq('active', true);
    // Crear nueva selección
    const { data, error } = await supabase
        .from('selected_box')
        .insert([{ caja_id: cajaId, active: true }])
        .select();
    if (error)
        throw error;
    return data[0];
};
export const getActiveSelection = async () => {
    const { data, error } = await supabase
        .from('selected_box')
        .select('*, cajas(*)')
        .eq('active', true)
        .single();
    if (error && error.code !== 'PGRST116')
        throw error;
    return data;
};
