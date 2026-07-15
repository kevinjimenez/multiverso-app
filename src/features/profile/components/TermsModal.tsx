import Ionicons from '@react-native-vector-icons/ionicons';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const TermsModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        <View className="bg-white rounded-t-3xl px-6 pt-4 max-h-[80%]">
          <View className="items-center pb-2">
            <View className="w-10 h-1.5 bg-gray-300 rounded-full" />
          </View>

          <View className="flex-row justify-between items-center pb-4">
            <Text className="font-bold text-xl text-ink">
              Términos y condiciones
            </Text>
            <Pressable
              className="bg-gray-100 p-1.5 rounded-full"
              onPress={onClose}
            >
              <Ionicons name="close" size={20} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-ink-soft text-xs pb-4">
              Última actualización · 1 de julio de 2026
            </Text>

            <View className="gap-y-5">
              <View className="gap-y-1">
                <Text className="font-semibold text-base text-ink">
                  1. Uso de la aplicación
                </Text>
                <Text className="text-ink-soft">
                  Multiverso es una aplicación de demostración que muestra
                  información pública de la serie Rick and Morty. Al usarla
                  aceptas hacerlo con fines personales y no comerciales.
                </Text>
              </View>

              <View className="gap-y-1">
                <Text className="font-semibold text-base text-ink">
                  2. Origen de los datos
                </Text>
                <Text className="text-ink-soft">
                  Los personajes, lugares y episodios provienen de la Rick and
                  Morty API pública. No garantizamos que la información esté
                  completa o actualizada en todo momento.
                </Text>
              </View>

              <View className="gap-y-1">
                <Text className="font-semibold text-base text-ink">
                  3. Propiedad intelectual
                </Text>
                <Text className="text-ink-soft">
                  Rick and Morty y sus elementos son marcas de sus respectivos
                  titulares. Esta app no está afiliada ni respaldada por ellos.
                </Text>
              </View>

              <View className="gap-y-1">
                <Text className="font-semibold text-base text-ink">
                  4. Privacidad
                </Text>
                <Text className="text-ink-soft">
                  No recopilamos datos personales. Cualquier preferencia se
                  guarda únicamente en tu dispositivo.
                </Text>
              </View>

              <View className="gap-y-1">
                <Text className="font-semibold text-base text-ink">
                  5. Cambios
                </Text>
                <Text className="text-ink-soft">
                  Podemos actualizar estos términos en cualquier momento. El uso
                  continuado de la app implica la aceptación de la versión
                  vigente.
                </Text>
              </View>
            </View>

            <Text className="text-ink-faint text-xs text-center py-6">
              Multiverso · versión 1.0.0
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default TermsModal;
