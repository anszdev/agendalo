import { APPOINTMENT_COLORS, COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { getRandomColor } from "@/helpers/appointment";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Input } from "../ui/Input";
import { ModalAppointment } from "./ModalAppointment";

type Tag = {
  tag: string;
  color: string;
};

export const TagsAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  const [createTag, setCreateTag] = useState(false);
  const [tagsSelected, setTagsSelected] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState<Tag>({
    color: "",
    tag: "",
  });
  const [tags, setTags] = useState<Tag[]>([
    { tag: "Lente", color: APPOINTMENT_COLORS.blue.background },
    { tag: "Bifocal", color: APPOINTMENT_COLORS.coral.background },
    { tag: "Pupilente", color: APPOINTMENT_COLORS.lavender.background },
  ]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Pressable onPress={() => setShowModal(true)}>
        <Text style={styles.label}>Servicio</Text>
        <Text style={styles.content}></Text>
      </Pressable>
      <ModalAppointment
        showModal={showModal}
        onToggleModal={setShowModal}
        onCancel={() => {
          setCreateTag(false);
        }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ paddingHorizontal: 16, paddingVertical: 8, maxHeight: 250 }}
        >
          {createTag && (
            <View style={styles.newTag}>
              <Input
                label="Nuevo servicio"
                value={newTag.tag}
                onChangeText={(text) => {
                  setNewTag({
                    ...newTag,
                    tag: text,
                  });
                }}
              />

              <View></View>
              <Pressable
                style={styles.addTagButton}
                onPress={() => {
                  if (!newTag.tag.trim()) {
                    // Opcional: mostrar alerta o feedback al usuario
                    return;
                  }
                  if (
                    tags.some(
                      ({ tag }) =>
                        tag.toLowerCase() === newTag.tag.trim().toLowerCase()
                    )
                  ) {
                    // Opcional: mostrar alerta o feedback al usuario
                    return;
                  }

                  setTags([
                    {
                      color: getRandomColor().background,
                      tag: newTag.tag.toLocaleLowerCase(),
                    },
                    ...tags,
                  ]);
                }}
              >
                <Feather name="check" size={24} color="#fff" />
              </Pressable>
            </View>
          )}

          <View style={styles.tagsList}>
            <Pressable
              style={[styles.tag, { backgroundColor: "#ddd" }]}
              onPress={() => setCreateTag(true)}
            >
              <Text style={styles.tagName}>
                Crear Servicio <Feather name="plus-circle" size={16} />
              </Text>
            </Pressable>
            {tags.map(({ tag, color }) => (
              <Pressable
                key={tag}
                style={[
                  styles.tag,
                  {
                    backgroundColor: tagsSelected.some((t) => t.tag === tag)
                      ? "#D4F6CC"
                      : color,
                  },
                ]}
                onPress={() => {
                  const isSelected = tagsSelected.some((t) => t.tag === tag);

                  if (!isSelected) {
                    setTagsSelected([...tagsSelected, { tag, color: "" }]);
                    return;
                  }

                  /* If is select, delete of selected list */
                  const newTagList = tagsSelected.filter(
                    (tagSelected) => tagSelected.tag !== tag
                  );

                  setTagsSelected(newTagList);
                }}
              >
                <Text style={styles.tagName}>{tag}</Text>
                {tagsSelected.some((t) => t.tag === tag) && (
                  <Feather name="check" size={16} color="#498f4cff" />
                )}
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </ModalAppointment>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: FONT_WEIGHT.semibold,
    color: COLORS.a_textPrimary,
  },
  content: {
    fontSize: 22,
    fontFamily: FONT_WEIGHT.bold,
    padding: 0,
    paddingBottom: 4,
    width: "auto",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.a_textPrimary,
  },
  tagsSelected: {
    fontFamily: FONT_WEIGHT.bold,
    fontSize: 24,
    color: "#bbb",
  },
  tagsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  tagName: {
    fontFamily: FONT_WEIGHT.semibold,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    textTransform: "capitalize",
  },
  newTag: {
    marginBottom: 24,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-end",
  },
  addTagButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: COLORS.a_primary,
  },
});
