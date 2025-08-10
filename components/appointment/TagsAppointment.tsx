import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Input } from "../ui/Input";
import { ModalAppointment } from "./ModalAppointment";

type Tag = {
  tagName: string;
  colors: string;
};

export const TagsAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  const [createTag, setCreateTag] = useState(false);
  const [tagsSelected, setTagsSelected] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState({
    tagName: "",
    colors: "",
  });
  const [tags, setTags] = useState([
    {
      tagName: "Lente",
      colors: "cyan",
    },
    {
      tagName: "Bifocal",
      colors: "pink",
    },
    {
      tagName: "Pupilente",
      colors: "yellow",
    },
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
          style={{ paddingHorizontal: 16, paddingVertical: 8, maxHeight: 250 }}
        >
          {createTag && (
            <View style={styles.newTag}>
              <Input
                label="Nuevo servicio"
                value={newTag.tagName}
                onChangeText={(text) => {
                  setNewTag({
                    ...newTag,
                    tagName: text,
                  });
                }}
              />

              <View></View>
              <Pressable
                style={styles.addTagButton}
                onPress={() => {
                  setTags([newTag, ...tags]);
                }}
              >
                <Feather name="check" size={24} color="#498f4cff" />
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
            {tags.map((tag) => (
              <Pressable
                key={tag.tagName}
                style={[
                  styles.tag,
                  {
                    backgroundColor: tagsSelected.some(
                      (t) => t.tagName === tag.tagName
                    )
                      ? "#D4F6CC"
                      : tag.colors,
                  },
                ]}
                onPress={() => {
                  const isSelected = tagsSelected.some(
                    (t) => t.tagName === tag.tagName
                  );

                  if (!isSelected) {
                    setTagsSelected([...tagsSelected, tag]);
                    return;
                  }

                  /* If is select, delete of selected list */
                  const newTagList = tagsSelected.filter(
                    (tagSelected) => tagSelected !== tag
                  );

                  setTagsSelected(newTagList);
                }}
              >
                <Text style={styles.tagName}>{tag.tagName}</Text>
                {tagsSelected.some((t) => t.tagName === tag.tagName) && (
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
    backgroundColor: "#D4F6CC",
  },
});
